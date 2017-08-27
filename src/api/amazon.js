import amazon from 'amazon-product-api';

export const client = amazon.createClient({
  awsId: process.env.AWS_ID || 'AWS_ID',
  awsSecret: process.env.AWS_SECRET || 'AWS_SECRET',
  awsTag: process.env.AWS_TAG || 'AWS_TAG',
});
