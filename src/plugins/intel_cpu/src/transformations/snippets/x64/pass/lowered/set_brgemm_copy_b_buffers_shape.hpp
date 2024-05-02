// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include "snippets/lowered/pass/pass.hpp"

namespace ov {
namespace intel_cpu {
namespace pass {

/**
 * @interface SetBrgemmCopyBBuffersShape
 * @brief Sets the allocation shape for the Buffers after BrgemmCopyB node using BrgemmCopyB parameters
 *        This pass may be deprecated when a more generic memory management approach is introduced.
 *        Ticket: 113744
 * @ingroup snippets
 */
class SetBrgemmCopyBBuffersShape : public snippets::lowered::pass::RangedPass {
public:
    SetBrgemmCopyBBuffersShape() = default;
    OPENVINO_RTTI("SetBrgemmCopyBBuffersShape", "Pass");
    bool run(snippets::lowered::LinearIR& linear_ir,
             snippets::lowered::LinearIR::constExprIt begin,
             snippets::lowered::LinearIR::constExprIt end) override;
};

}  // namespace pass
}  // namespace intel_cpu
}  // namespace ov
