import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIA4ZLU7NUWGNVO3RAG",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};
