class User < ApplicationRecord
  has_many :task
  has_secure_password
  has_secure_password :recovery_password, validations: false
end
