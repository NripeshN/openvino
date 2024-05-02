// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "ov_lpt_models/common/fake_quantize_on_data.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {
class ConcatWithDifferentChildrenTransformationParam {
public:
    std::int64_t axis;
    ov::builder::subgraph::FakeQuantizeOnData fqOnData1;
    ov::builder::subgraph::FakeQuantizeOnData fqOnData2;
};

typedef std::tuple<ov::element::Type,
                   ov::PartialShape,
                   std::string,  // target device: CPU, GPU
                   ConcatWithDifferentChildrenTransformationParam,
                   ov::pass::low_precision::LayerTransformation::Params  // transformation parameters
                   >
    ConcatWithDifferentChildrenTransformationParams;

class ConcatWithDifferentChildrenTransformation
    : public testing::WithParamInterface<ConcatWithDifferentChildrenTransformationParams>,
      public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(
        const testing::TestParamInfo<ConcatWithDifferentChildrenTransformationParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace LayerTestsDefinitions
