# -*- coding: utf-8 -*-
# Copyright (C) 2018-2024 Intel Corporation
# SPDX-License-Identifier: Apache-2.0

from openvino.runtime.opset1.ops import absolute
from openvino.runtime.opset1.ops import absolute as abs
from openvino.runtime.opset1.ops import (
    acos,
    add,
    asin,
    atan,
    avg_pool,
    binary_convolution,
)
from openvino.runtime.opset1.ops import ceiling
from openvino.runtime.opset1.ops import ceiling as ceil
from openvino.runtime.opset1.ops import (
    clamp,
    concat,
    constant,
    convert,
    convert_like,
    convolution,
    convolution_backprop_data,
    cos,
    cosh,
    ctc_greedy_decoder,
    deformable_psroi_pooling,
    depth_to_space,
    divide,
    elu,
    equal,
    erf,
    exp,
    fake_quantize,
    floor,
    floor_mod,
    gather_tree,
    greater,
    greater_equal,
    grn,
    group_convolution,
    group_convolution_backprop_data,
    hard_sigmoid,
    less,
    less_equal,
    log,
    logical_and,
    logical_not,
    logical_or,
    logical_xor,
    lrn,
    matmul,
    maximum,
    minimum,
    mod,
    multiply,
    negative,
    normalize_l2,
    not_equal,
    one_hot,
    parameter,
    power,
    prelu,
    prior_box_clustered,
    psroi_pooling,
    reduce_logical_and,
    reduce_logical_or,
    reduce_max,
    reduce_mean,
    reduce_min,
    reduce_prod,
    reduce_sum,
    region_yolo,
    relu,
    reshape,
    result,
    reverse_sequence,
    select,
    selu,
    sigmoid,
    sign,
    sin,
    sinh,
    space_to_depth,
    split,
    sqrt,
    squared_difference,
    squeeze,
    strided_slice,
    subtract,
    tan,
    tanh,
    tensor_iterator,
    tile,
    transpose,
    unsqueeze,
    variadic_split,
)
from openvino.runtime.opset2.ops import (
    batch_to_space,
    reorg_yolo,
    roi_pooling,
    space_to_batch,
)
from openvino.runtime.opset3.ops import broadcast, bucketize
from openvino.runtime.opset3.ops import cum_sum
from openvino.runtime.opset3.ops import cum_sum as cumsum
from openvino.runtime.opset3.ops import (
    embedding_bag_offsets_sum,
    embedding_bag_packed_sum,
    embedding_segments_sum,
    extract_image_patches,
    gru_cell,
    non_zero,
    rnn_cell,
    scatter_update,
    shape_of,
    shuffle_channels,
)
from openvino.runtime.opset4.ops import (
    acosh,
    asinh,
    atanh,
    ctc_loss,
    hswish,
    lstm_cell,
    mish,
    proposal,
    range,
    reduce_l1,
    reduce_l2,
    scatter_nd_update,
    softplus,
    swish,
)
from openvino.runtime.opset5.ops import (
    batch_norm_inference,
    gru_sequence,
    hsigmoid,
    log_softmax,
    loop,
    lstm_sequence,
    rnn_sequence,
    round,
)
from openvino.runtime.opset6.ops import (
    assign,
    ctc_greedy_decoder_seq_len,
    gather_elements,
    mvn,
    read_value,
)
from openvino.runtime.opset7.ops import dft, einsum, gelu, idft, roll
from openvino.runtime.opset8.ops import (
    adaptive_avg_pool,
    adaptive_max_pool,
    deformable_convolution,
    detection_output,
    gather,
    gather_nd,
    i420_to_bgr,
    i420_to_rgb,
    if_op,
    matrix_nms,
    max_pool,
    nv12_to_bgr,
    nv12_to_rgb,
    prior_box,
    random_uniform,
    slice,
    softmax,
)
from openvino.runtime.opset9.ops import (
    eye,
    generate_proposals,
    grid_sample,
    irdft,
    multiclass_nms,
    non_max_suppression,
    rdft,
    roi_align,
    softsign,
)
from openvino.runtime.opset10.ops import is_finite, is_inf, is_nan, unique
from openvino.runtime.opset11.ops import interpolate, topk
from openvino.runtime.opset12.ops import (
    group_normalization,
    pad,
    scatter_elements_update,
)
