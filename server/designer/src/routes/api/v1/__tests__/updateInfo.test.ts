import request from 'supertest';
import { app } from '../../../../app';
describe('Update info route test group', () => {
  it('should throw authorization error if non admin access this route', async () => {});

  it('should update info if admin updates with valid parameters', async () => {
    const res = await request(app).post('/api/v1/designer');
  });

  it('should throw Bad request error if invalid parameters are submitted', async () => {});
});