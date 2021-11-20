class AddUserColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string
    add_column :users, :bio, :text

    remove_index :users, :session_token
    add_index :users, :session_token, unique: true
    
    add_index :users, :email, unique: true
  end

end
