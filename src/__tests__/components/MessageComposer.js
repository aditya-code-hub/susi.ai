import React from 'react';
import MessageComposer from '../../components/MessageComposer.react';
import { shallow } from 'enzyme';

 it('render MessageComposer without crashing',()=>{
   shallow(<MessageComposer threadID="t_1" />);
 });
