import handler from '../pages/api/contact';
import type { NextApiRequest, NextApiResponse } from 'next';

function createMockReqRes(body: any, method = 'POST') {
  const req = { method, body } as unknown as NextApiRequest;
  const res: any = {
    statusCode: 200,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json: jest.fn(function (data: any) {
      this.data = data;
      return this;
    }),
  } as unknown as NextApiResponse;
  return { req, res };
}

describe('contact API', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('returns 400 for missing fields', async () => {
    const { req, res } = createMockReqRes({ name: 'Test' });
    await handler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'All fields are required' });
  });

  it('returns 200 when all fields provided', async () => {
    process.env.EMAIL_USER = 'user@test.com';
    process.env.EMAIL_PASS = 'pass';

    const mockSendMail = jest.fn().mockResolvedValue({});
    jest.mock('nodemailer', () => ({
      createTransport: jest.fn(() => ({ sendMail: mockSendMail })),
    }));
    const { req, res } = createMockReqRes({
      name: 'John',
      email: 'john@example.com',
      message: 'hi',
    });
    await handler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Email sent successfully' });
    expect(mockSendMail).toHaveBeenCalled();
  });
});
