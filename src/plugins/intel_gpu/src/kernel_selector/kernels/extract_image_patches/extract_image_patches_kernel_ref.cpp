// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#include "extract_image_patches_kernel_ref.h"

#include <string>
#include <vector>

#include "kernel_selector_utils.h"

namespace kernel_selector {
KernelsData ExtractImagePatchesKernelRef::GetKernelsData(const Params& params) const {
    return GetCommonKernelsData(params);
}

KernelsPriority ExtractImagePatchesKernelRef::GetKernelsPriority(const Params& /*params*/) const {
    return DONT_USE_IF_HAVE_SOMETHING_ELSE;
}
}  // namespace kernel_selector
