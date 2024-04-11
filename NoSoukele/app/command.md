```
$body = @{
     "_id" = "123456"
     "nom" = "John Doe"
     "email" = "john.doe@example.com"
     "mot_de_passe" = "password123"
     "preferences" = @{
         "devise" = "USD"
         "langue" = "en"
     }
 }

 $response = Invoke-RestMethod -Uri 'http://localhost:3001/' -Method Post -Body ($body | ConvertTo-Json) -ContentType 'application/json'
 $response
```