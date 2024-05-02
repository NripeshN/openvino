// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#include "space_to_batch_kernel_ref.h"

#include <string>
#include <vector>

#include "kernel_selector_utils.h"

namespace kernel_selector {
ParamsKey SpaceToBatchKernelRef::GetSupportedKey() const {
    ParamsKey k;
    k.EnableInputDataType(Datatype::F16);
    k.EnableInputDataType(Datatype::F32);
    k.EnableInputDataType(Datatype::UINT8);
    k.EnableInputDataType(Datatype::INT8);
    k.EnableInputDataType(Datatype::INT32);

    k.EnableOutputDataType(Datatype::F16);
    k.EnableOutputDataType(Datatype::F32);
    k.EnableOutputDataType(Datatype::UINT8);
    k.EnableOutputDataType(Datatype::INT8);
    k.EnableOutputDataType(Datatype::INT32);

    k.EnableInputLayout(DataLayout::bfyx);
    k.EnableInputLayout(DataLayout::bfzyx);
    k.EnableInputLayout(DataLayout::bfwzyx);
    k.EnableInputLayout(DataLayout::b_fs_yx_fsv16);

    k.EnableOutputLayout(DataLayout::bfyx);
    k.EnableOutputLayout(DataLayout::bfzyx);
    k.EnableOutputLayout(DataLayout::bfwzyx);
    k.EnableOutputLayout(DataLayout::b_fs_yx_fsv16);

    k.EnableDifferentTypes();
    k.EnableTensorOffset();
    k.EnableTensorPitches();
    k.EnableBatching();
    return k;
}

JitConstants SpaceToBatchKernelRef::GetJitConstants(const space_to_batch_params& params) const {
    auto jit = Parent::GetJitConstants(params);

    if (!params.fused_ops.empty()) {
        std::vector<std::string> idx_order;
        auto input_dt = params.inputs[0].GetDType();

        switch (params.inputs[0].GetDims().size()) {
        case 5: {
            idx_order = {"batch", "feature", "z", "y", "x"};
            break;
        }
        case 6: {
            idx_order = {"batch", "feature", "w", "z", "y", "x"};
            break;
        }
        default: {
            idx_order = {"batch", "feature", "y", "x"};
            break;
        }
        }
        auto conf = FusedOpsConfiguration("", idx_order, "in", input_dt);
        jit.Merge(MakeFusedOpsJitConstants(params, {conf}));
    }
    return jit;
}

KernelsData SpaceToBatchKernelRef::GetKernelsData(const Params& params) const {
    return GetCommonKernelsData(params);
}

KernelsPriority SpaceToBatchKernelRef::GetKernelsPriority(const Params& /*params*/) const {
    return FORCE_PRIORITY_9;
}
}  // namespace kernel_selector
