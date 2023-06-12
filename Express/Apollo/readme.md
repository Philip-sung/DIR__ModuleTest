# Operation
mutation newPhoto($name: String!, $description: String){
  postPhoto(name: $name, description:$description)
}

query photos{
  totalPhotos
}

# Variables
{
  "name": "sample photo A",
  "description": "A sample photo for our dataset"
}