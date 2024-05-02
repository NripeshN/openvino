// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <string>
#include <tuple>

#include "shared_test_classes/base/ov_subgraph.hpp"

namespace ov {
namespace test {

using clampParamsTuple = std::tuple<std::vector<InputShape>,  // Input shape
                                    std::pair<float, float>,  // Interval [min, max]
                                    ov::element::Type,        // Model precision
                                    std::string>;             // Device name

class ClampLayerTest : public testing::WithParamInterface<clampParamsTuple>, virtual public ov::test::SubgraphBaseTest {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<clampParamsTuple>& obj);

protected:
    void SetUp() override;
};

}  // namespace test
}  // namespace ov
