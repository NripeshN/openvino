// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "ov_lpt_models/common/fake_quantize_on_data.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

class UnsqueezeTransformationParam {
public:
    ov::builder::subgraph::FakeQuantizeOnData fakeQuantize;
    std::vector<float> unsqueezeAxes;
    ov::PartialShape shape;
};

typedef std::tuple<ov::element::Type,
                   std::string,
                   ov::pass::low_precision::LayerTransformation::Params,
                   UnsqueezeTransformationParam>
    UnsqueezeTransformationParams;

class UnsqueezeTransformation : public testing::WithParamInterface<UnsqueezeTransformationParams>,
                                public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<UnsqueezeTransformationParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace LayerTestsDefinitions
