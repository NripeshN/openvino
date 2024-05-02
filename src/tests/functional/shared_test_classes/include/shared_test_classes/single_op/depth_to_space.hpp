// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <string>
#include <tuple>
#include <vector>

#include "openvino/op/depth_to_space.hpp"
#include "shared_test_classes/base/ov_subgraph.hpp"

namespace ov {
namespace test {
using depthToSpaceParamsTuple = typename std::tuple<std::vector<InputShape>,                     // Input shape
                                                    ov::element::Type,                           // Model type
                                                    ov::op::v0::DepthToSpace::DepthToSpaceMode,  // Mode
                                                    std::size_t,                                 // Block size
                                                    std::string>;                                // Device name>

class DepthToSpaceLayerTest : public testing::WithParamInterface<depthToSpaceParamsTuple>,
                              virtual public ov::test::SubgraphBaseTest {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<depthToSpaceParamsTuple>& obj);

protected:
    void SetUp() override;
};

}  // namespace test
}  // namespace ov
