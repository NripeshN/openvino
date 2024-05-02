// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <pybind11/pybind11.h>

#include <vector>

#include "openvino/op/constant.hpp"

namespace py = pybind11;

std::vector<size_t> _get_strides(const ov::op::v0::Constant& self);

void regclass_graph_op_Constant(py::module m);
