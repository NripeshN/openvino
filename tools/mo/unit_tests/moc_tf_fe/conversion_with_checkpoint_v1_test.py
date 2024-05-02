# Copyright (C) 2018-2024 Intel Corporation
# SPDX-License-Identifier: Apache-2.0

import tempfile
import unittest

import numpy as np
from unit_tests.moc_tf_fe.utils import basic_check


class TestBasicConversion(unittest.TestCase):
    def prepare_checkpoint_v1(self):
        # quite old TensorFlow version can produce checkpoint v1 file
        # so have hard coded bytestream corresponding to checkpoint v1 content
        # this is a checkpoint v1 for Variable global_step with value = 14108582 of int64 type
        buffer_checkpoint = [
            0x00,
            0x00,
            0x1B,
            0x0A,
            0x19,
            0x0A,
            0x13,
            0x0A,
            0x0B,
            0x67,
            0x6C,
            0x6F,
            0x62,
            0x61,
            0x6C,
            0x5F,
            0x73,
            0x74,
            0x65,
            0x70,
            0x12,
            0x00,
            0x18,
            0x09,
            0x22,
            0x00,
            0x12,
            0x02,
            0x08,
            0x01,
            0x00,
            0x0F,
            0x19,
            0x00,
            0x67,
            0x6C,
            0x6F,
            0x62,
            0x61,
            0x6C,
            0x5F,
            0x73,
            0x74,
            0x65,
            0x70,
            0x00,
            0x01,
            0x00,
            0x12,
            0x17,
            0x0A,
            0x0B,
            0x67,
            0x6C,
            0x6F,
            0x62,
            0x61,
            0x6C,
            0x5F,
            0x73,
            0x74,
            0x65,
            0x70,
            0x12,
            0x00,
            0x1A,
            0x06,
            0x52,
            0x04,
            0xA6,
            0x8F,
            0xDD,
            0x06,
            0x00,
            0x00,
            0x00,
            0x00,
            0x01,
            0x00,
            0x00,
            0x00,
            0x00,
            0x62,
            0x29,
            0x33,
            0xD3,
            0x00,
            0x00,
            0x00,
            0x00,
            0x01,
            0x00,
            0x00,
            0x00,
            0x00,
            0xC0,
            0xF2,
            0xA1,
            0xB0,
            0x00,
            0x01,
            0x02,
            0x01,
            0x00,
            0x51,
            0x00,
            0x00,
            0x00,
            0x00,
            0x01,
            0x00,
            0x00,
            0x00,
            0x00,
            0x1A,
            0x13,
            0xD9,
            0x46,
            0x56,
            0x08,
            0x63,
            0x0E,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x57,
            0xFB,
            0x80,
            0x8B,
            0x24,
            0x75,
            0x47,
            0xDB,
        ]
        return buffer_checkpoint

    def test_basic_checkpoint_v1(self):
        ckpt_file = tempfile.NamedTemporaryFile(delete=False)
        checkpoint_byte_stream = self.prepare_checkpoint_v1()
        ckpt_file.write(bytes(checkpoint_byte_stream))
        ckpt_file.close()
        basic_check(
            input_model="model_with_variable_v1.pbtxt",
            argv_input=None,
            input_data={"input1:0": np.array([[1]], dtype=np.int64)},
            expected_dtype=np.int64,
            expected_value=np.array([[14108583]], dtype=np.int64),
            use_new_frontend=True,
            use_legacy_frontend=False,
            input_checkpoint=ckpt_file.name,
        )
