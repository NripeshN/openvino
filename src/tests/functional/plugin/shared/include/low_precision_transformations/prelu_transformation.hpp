// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <string>

#include "ov_lpt_models/common/fake_quantize_on_data.hpp"
#include "shared_test_classes/base/low_precision_transformations/layer_transformation.hpp"

namespace LayerTestsDefinitions {

class PReluTestValues {
public:
    ov::builder::subgraph::FakeQuantizeOnData fakeQuantize;
    bool isSubtract;
};

typedef std::tuple<ov::element::Type, ov::PartialShape, std::string, PReluTestValues> PReluTransformationParams;

class PReluTransformation : public testing::WithParamInterface<PReluTransformationParams>,
                            public LayerTestsUtils::LayerTransformation {
public:
    static std::string getTestCaseName(const testing::TestParamInfo<PReluTransformationParams>& obj);

protected:
    void SetUp() override;
};

}  // namespace LayerTestsDefinitions
