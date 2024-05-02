// Copyright (C) 2018-2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0
//

#pragma once

#include "openvino/op/constant.hpp"
#include "openvino/op/op.hpp"

namespace ov {
namespace snippets {
namespace op {

/**
 * @interface Scalar
 * @brief Generated by Canonicalization for a scalar constant Shape() == {1}
 * @ingroup snippets
 */
class Scalar : public ov::op::v0::Constant {
public:
    OPENVINO_OP("Scalar", "SnippetsOpset", ov::op::v0::Constant);

    Scalar() = default;

    template <class T, class = typename std::enable_if<std::is_fundamental<T>::value>::type>
    Scalar(const element::Type& type, Shape shape, T value) : Constant(type, shape, value) {
        constructor_validate_and_infer_types();
    }
    explicit Scalar(const Constant& other) : Constant(other) {
        constructor_validate_and_infer_types();
    }
    Scalar(const Scalar& other) : Constant(other) {
        constructor_validate_and_infer_types();
    }
    Scalar& operator=(const Scalar&) = delete;

    std::shared_ptr<Node> clone_with_new_inputs(const OutputVector& new_args) const override;
    void validate_and_infer_types() override;
    bool visit_attributes(AttributeVisitor& visitor) override;
};

}  // namespace op
}  // namespace snippets
}  // namespace ov
