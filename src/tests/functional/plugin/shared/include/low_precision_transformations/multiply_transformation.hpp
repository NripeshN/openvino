// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "ov_lpt_models/common/fake_quantize_on_data.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

class MultiplyTestValues {
public:
    bool broadcast1;
    ov::builder::subgraph::FakeQuantizeOnData fakeQuantize1;
    bool broadcast2;
    ov::builder::subgraph::FakeQuantizeOnData fakeQuantize2;
    ov::builder::subgraph::FakeQuantizeOnData fakeQuantizeAfter;
    ov::element::Type expectedPrecisions;
    bool secondInputIsConstant;
};

typedef std::tuple<ov::element::Type, ov::PartialShape, std::string, MultiplyTestValues> MultiplyTransformationParams;

class MultiplyTransformation : public testing::WithParamInterface<MultiplyTransformationParams>,
                               public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<MultiplyTransformationParams>& obj);

protected:
    void SetUp() override;
    void run() override;
};

}  // namespace LayerTestsDefinitions
