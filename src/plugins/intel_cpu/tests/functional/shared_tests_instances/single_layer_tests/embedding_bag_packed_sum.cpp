// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#include "single_op_tests/embedding_bag_packed_sum.hpp"

#include <vector>

#include "common_test_utils/test_constants.hpp"

namespace {
using ov::test::EmbeddingBagPackedSumLayerTest;

const std::vector<ov::element::Type> model_type = {ov::element::f32, ov::element::i32, ov::element::u8};

const std::vector<ov::element::Type> ind_type = {ov::element::i64, ov::element::i32};

const std::vector<std::vector<ov::Shape>> input_shapes_static = {{{5, 6}}, {{10, 35}}, {{5, 4, 16}}};

const std::vector<std::vector<std::vector<size_t>>> indices = {{{0, 1}, {2, 2}, {3, 4}},
                                                               {{4, 4, 3}, {1, 0, 2}},
                                                               {{1, 2, 1, 2}, {1, 2, 1, 2}}};
const std::vector<bool> with_weights = {false, true};

const auto embBagPackedSumArgSet = ::testing::Combine(::testing::ValuesIn(indices), ::testing::ValuesIn(with_weights));

INSTANTIATE_TEST_SUITE_P(
    smoke,
    EmbeddingBagPackedSumLayerTest,
    ::testing::Combine(embBagPackedSumArgSet,
                       ::testing::ValuesIn(ov::test::static_shapes_to_test_representation(input_shapes_static)),
                       ::testing::ValuesIn(model_type),
                       ::testing::ValuesIn(ind_type),
                       ::testing::Values(ov::test::utils::DEVICE_CPU)),
    EmbeddingBagPackedSumLayerTest::getTestCaseName);
}  // namespace
