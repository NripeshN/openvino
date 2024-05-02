// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#include "single_op_tests/gru_cell.hpp"

#include <vector>

#include "common_test_utils/test_constants.hpp"

namespace {
using ov::test::GRUCellTest;

std::vector<bool> should_decompose{false, true};
std::vector<size_t> batch{5};
std::vector<size_t> hidden_size{1, 10};
std::vector<size_t> input_size{1, 30};
std::vector<std::vector<std::string>> activations = {{"relu", "tanh"},
                                                     {"tanh", "sigmoid"},
                                                     {"sigmoid", "tanh"},
                                                     {"tanh", "relu"}};

std::vector<float> clip = {0.0f, 0.7f};
std::vector<bool> linear_before_reset = {true, false};
std::vector<ov::test::utils::InputLayerType> layer_types = {ov::test::utils::InputLayerType::CONSTANT,
                                                            ov::test::utils::InputLayerType::PARAMETER};

std::vector<ov::element::Type> netPrecisions = {ov::element::f32, ov::element::f16};

INSTANTIATE_TEST_SUITE_P(GRUCellCommon,
                         GRUCellTest,
                         ::testing::Combine(::testing::ValuesIn(should_decompose),
                                            ::testing::ValuesIn(batch),
                                            ::testing::ValuesIn(hidden_size),
                                            ::testing::ValuesIn(input_size),
                                            ::testing::ValuesIn(activations),
                                            ::testing::ValuesIn(clip),
                                            ::testing::ValuesIn(linear_before_reset),
                                            ::testing::ValuesIn(layer_types),
                                            ::testing::ValuesIn(layer_types),
                                            ::testing::ValuesIn(layer_types),
                                            ::testing::ValuesIn(netPrecisions),
                                            ::testing::Values(ov::test::utils::DEVICE_GPU)),
                         GRUCellTest::getTestCaseName);

}  // namespace
