// Copyright (C) 2016-2022 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <memory>
#include <vector>

#include "intel_gpu/runtime/kernel.hpp"
#include "intel_gpu/runtime/kernel_args.hpp"
#include "ocl_common.hpp"
#include "ocl_memory.hpp"

namespace cldnn {
namespace ocl {

class ocl_kernel : public kernel {
    ocl_kernel_type _compiled_kernel;
    std::string _kernel_id;

public:
    ocl_kernel(ocl_kernel_type compiled_kernel, const std::string& kernel_id)
        : _compiled_kernel(compiled_kernel),
          _kernel_id(kernel_id) {}

    std::string get_id() const override {
        return _kernel_id;
    }
    const ocl_kernel_type& get_handle() const {
        return _compiled_kernel;
    }
    ocl_kernel_type& get_handle() {
        return _compiled_kernel;
    }
    std::shared_ptr<kernel> clone() const override {
        return std::make_shared<ocl_kernel>(get_handle().clone(), _kernel_id);
    }
};

}  // namespace ocl
}  // namespace cldnn
