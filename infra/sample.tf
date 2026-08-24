terraform {
  required_version = ">= 1.0"
}
resource "aws_s3_bucket" "lab" {
  bucket = "aikido-vrp-lab-research"
  acl    = "private"
}
output "bucket_arn" {
  value = aws_s3_bucket.lab.arn
}
