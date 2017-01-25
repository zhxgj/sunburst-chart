/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const D3PersonalityProfileWrapperV2 = require('../d3-profile-wrappers/v2/index');
const D3PersonalityProfileWrapperV3 = require('../d3-profile-wrappers/v3/index');

const v2Profile = require('../examples/profiles/en_v2');
const v3Profile = require('../examples/profiles/en_v3');

describe('Text Summary Tests', () => {

  it('Default (V2, English) profile summary', () => {
    new D3PersonalityProfileWrapperV2(v2Profile);
    new D3PersonalityProfileWrapperV3(v3Profile);
  });


});
