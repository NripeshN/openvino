// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#include "functional_test_utils/skip_tests_config.hpp"

#include <string>
#include <vector>

#include "conformance.hpp"

namespace ov {
namespace test {
namespace conformance {

const char* targetDevice = "";
const char* targetPluginName = "";
const char* refCachePath = "";

std::vector<std::string> IRFolderPaths = {};
std::vector<std::string> disabledTests = {};

ShapeMode shapeMode = ov::test::conformance::ShapeMode::BOTH;

}  // namespace conformance
}  // namespace test
}  // namespace ov

std::vector<std::string> disabledTestPatterns() {
    return ov::test::conformance::disabledTests;
}
