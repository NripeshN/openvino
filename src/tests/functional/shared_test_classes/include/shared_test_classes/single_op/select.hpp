// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <string>
#include <tuple>

#include "shared_test_classes/base/ov_subgraph.hpp"

namespace ov {
namespace test {
typedef std::tuple<std::vector<InputShape>,    // mask, then, else shapes
                   ov::element::Type,          // then, else types
                   ov::op::AutoBroadcastSpec,  // broadcast
                   ov::test::TargetDevice      // Device name
                   >
    selectTestParams;

class SelectLayerTest : public testing::WithParamInterface<selectTestParams>,
                        virtual public ov::test::SubgraphBaseTest {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<selectTestParams>& obj);

protected:
    void SetUp() override;
};
}  // namespace test
}  // namespace ov
