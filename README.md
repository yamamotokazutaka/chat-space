## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|reference|null: false,foreign_key: true|
|user_id|reference|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false,unique: true|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false,foreign_key: true|
|name|string|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user