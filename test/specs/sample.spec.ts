import * as chai from 'chai';
import * as sinon from 'sinon';
import * as mocha from 'mocha';

import {Sample} from '../../src/sample';

const assert = chai.assert;

describe('Sample', () => {
  let sandbox;
/*
  before(() => {
  });

  after(() => {
  });
*/
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Sample', () => {
    it('Sample::ctor - ', () => {   
      let sample = new Sample();
      assert(sample != null);
    });
  });
});
