# API de Subida de Imágenes

## Flujo de Subida de Imágenes

### 1. Subir una Imagen

**Endpoint:** `POST /api/images/upload`

**Request:**
```javascript
const formData = new FormData()
formData.append('file', fileInput.files[0]) // El archivo de imagen

const response = await fetch('/api/images/upload', {
  method: 'POST',
  body: formData,
})

const data = await response.json()
// {
//   success: true,
//   uploadId: "img-1234567890-abc123",
//   objectPath: "objects/img-1234567890-abc123",
//   url: "/objects/img-1234567890-abc123",
//   contentType: "image/png",
//   size: 12345
// }
```

**Ejemplo completo en React:**
```tsx
const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0]
  if (!file) return

  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await fetch('/api/images/upload', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    
    if (data.success) {
      // Usar data.url para mostrar la imagen
      console.log('Imagen subida:', data.url)
      // Ejemplo: <img src={data.url} alt="Uploaded" />
    }
  } catch (error) {
    console.error('Error al subir imagen:', error)
  }
}
```

### 2. Obtener la Imagen Subida

**Endpoint:** `GET /objects/[objectPath]`

Una vez subida, puedes usar la URL directamente:
```tsx
<img src="/objects/img-1234567890-abc123" alt="Uploaded image" />
```

### 3. Normalizar una URL de Imagen

**Endpoint:** `POST /api/images/normalize`

```javascript
const response = await fetch('/api/images/normalize', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    imageURL: 'https://example.com/images/photo.jpg'
  })
})

const data = await response.json()
// { objectPath: "images/photo.jpg" }
```

## Otros Endpoints

### POST /api/leads
Captura información de leads (email, name, company)

### POST /api/analytics/export
Trackea eventos de exportación de firma

### POST /api/cleanup
Limpia imágenes temporales expiradas (más de 24 horas)

## Notas

- Las imágenes se almacenan en memoria (solo para desarrollo)
- Las imágenes expiran después de 24 horas
- En producción, reemplazar con servicio de object storage (Vercel Blob, S3, etc.)
- Tamaño máximo de archivo: 10MB
- Tipos permitidos: JPEG, PNG, GIF, WebP, SVG

