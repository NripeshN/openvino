// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

typedef std::
    tuple<ov::element::Type, ov::PartialShape, std::string, ov::pass::low_precision::LayerTransformation::Params>
        SubtractTransformationParams;

class SubtractTransformation : public testing::WithParamInterface<SubtractTransformationParams>,
                               public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<SubtractTransformationParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace LayerTestsDefinitions
