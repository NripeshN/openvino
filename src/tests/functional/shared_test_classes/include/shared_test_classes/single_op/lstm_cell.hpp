// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <string>
#include <tuple>
#include <vector>

#include "common_test_utils/test_enums.hpp"
#include "shared_test_classes/base/ov_subgraph.hpp"

namespace ov {
namespace test {
using LSTMCellParams = typename std::tuple<bool,                      // using decompose to sub-ops transformation
                                           size_t,                    // batch
                                           size_t,                    // hidden size
                                           size_t,                    // input size
                                           std::vector<std::string>,  // activations
                                           float,                     // clip
                                           ov::test::utils::InputLayerType,  // W input type (Constant or Parameter)
                                           ov::test::utils::InputLayerType,  // R input type (Constant or Parameter)
                                           ov::test::utils::InputLayerType,  // B input type (Constant or Parameter)
                                           ov::element::Type,                // Network precision
                                           std::string>;                     // Device name

class LSTMCellTest : public testing::WithParamInterface<LSTMCellParams>, virtual public ov::test::SubgraphBaseTest {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<LSTMCellParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace test
}  // namespace ov
