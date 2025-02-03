import { CustomerIdPipe } from './customer-id.pipe';

describe('CustomerIdPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerIdPipe();
    expect(pipe).toBeTruthy();
  });
});
