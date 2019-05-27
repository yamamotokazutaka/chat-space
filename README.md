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



<!-- mercari -->
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false,unique: true|
|password|string|null: false|
|name|string|null: false|
|exihibit_items|
|purchace_items|

### Association
- has_many :items
- has_many :comments



## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|description|text|null: false|
|info| ←items_infoテーブル？
|image|
|price|
|iine|
|user_name|
|user_id|
|coment|
### Association
- belongs_to :user
- has_many :comments



## comentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|
|body|

### Association
- has_many :users
- has_many :comments
