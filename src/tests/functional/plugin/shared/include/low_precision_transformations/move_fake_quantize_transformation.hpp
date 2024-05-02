// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "low_precision/move_fake_quantize.hpp"
#include "ov_lpt_models/common/fake_quantize_on_data.hpp"
#include "ov_lpt_models/common/fake_quantize_on_weights.hpp"
#include "ov_lpt_models/move_fake_quantize.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

class MoveFakeQuantizeTransformationParam {
public:
    size_t concatInputsCount;
    std::string operation;
    ov::builder::subgraph::FakeQuantizeOnDataWithConstant fakeQuantizeAfter;
    ov::builder::subgraph::DequantizationOperations::Convert convertAfter;
    ov::builder::subgraph::DequantizationOperations dequantizationAfter;
    std::string layerName;
    std::string expectedKernelType;
    std::int64_t axis;
};

typedef std::tuple<ov::element::Type,
                   std::vector<ov::PartialShape>,
                   std::string,
                   ov::pass::low_precision::LayerTransformation::Params,
                   bool,
                   MoveFakeQuantizeTransformationParam>
    MoveFakeQuantizeTransformationParams;

class MoveFakeQuantizeTransformation : public testing::WithParamInterface<MoveFakeQuantizeTransformationParams>,
                                       public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(testing::TestParamInfo<MoveFakeQuantizeTransformationParams> obj);

protected:
    void SetUp() override;

    void run() override;
};

}  // namespace LayerTestsDefinitions
