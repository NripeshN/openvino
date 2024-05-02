// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "ov_lpt_models/common/dequantization_operations.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

class TransposeTransformationTestValues {
public:
    ov::PartialShape inputShape;
    std::vector<int> transposeConstValues;
    ov::pass::low_precision::LayerTransformation::Params params;
    ov::element::Type precisionBeforeFq;
    ov::builder::subgraph::FakeQuantizeOnData fqOnData;
};

typedef std::tuple<ov::element::Type, std::string, TransposeTransformationTestValues> TransposeTransformationParams;

class TransposeTransformation : public testing::WithParamInterface<TransposeTransformationParams>,
                                public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<TransposeTransformationParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace LayerTestsDefinitions
