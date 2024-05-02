﻿// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include <string>
#include <vector>

#include "ctc_greedy_decoder_kernel_base.h"

namespace kernel_selector {
class CTCGreedyDecoderKernelRef : public CTCGreedyDecoderKernelBase {
public:
    using Parent = CTCGreedyDecoderKernelBase;
    CTCGreedyDecoderKernelRef() : CTCGreedyDecoderKernelBase("ctc_greedy_decoder_ref") {}
    virtual ~CTCGreedyDecoderKernelRef() {}

    KernelsData GetKernelsData(const Params& params) const override;
    KernelsPriority GetKernelsPriority(const Params& params) const override;
    ParamsKey GetSupportedKey() const override;
};
}  // namespace kernel_selector
