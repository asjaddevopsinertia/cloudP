export const formJson = [
    {
      "id": 1,
      "key": "profile_pic",
      "type": "image",
      "label": "Upload your profile picture",
      "required": false
    },
    {
      "id": 2,
      "key": "name",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder":"Enter your name"
    },
    {
      "id": 3,
      "key": "email",
      "type": "text",
      "label": "Email Address",
      "required": true,
      "placeholder":"Enter your email"
    },
    {
      "id": 4,
      "key": "gender",
      "type": "radio",
      "label": "Gender",
      "required": true,
      "options": [
        {
          "id": 1,
          "label": "Male",
          "key": "male"
        },
        {
          "id": 2,
          "label": "Female",
          "key": "female"
        }
      ]
    },
    {
      "id": 5,
      "key": "birthday",
      "type": "date",
      "label": "Date of Birth",
      "required": false,
      "placeholder":"Select your date of birth"
    }
  ]
