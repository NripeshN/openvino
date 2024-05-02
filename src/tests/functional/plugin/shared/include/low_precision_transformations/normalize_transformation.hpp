// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "ov_lpt_models/common/fake_quantize_on_data.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

typedef std::
    tuple<ov::element::Type, std::pair<ov::PartialShape, ov::Shape>, std::string, std::vector<uint64_t>, bool, bool>
        NormalizeL2TransformationParams;

class NormalizeL2Transformation : public testing::WithParamInterface<NormalizeL2TransformationParams>,
                                  public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<NormalizeL2TransformationParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace LayerTestsDefinitions
