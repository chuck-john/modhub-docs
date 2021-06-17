import React, { useEffect } from 'react'
import SwaggerUI from 'swagger-ui'

import 'swagger-ui/dist/swagger-ui.css'

export default function V1() {
  useEffect(() => {
    SwaggerUI({
      dom_id: '#v1',
      url: 'http://localhost:3000/swagger.json',
      requestInterceptor: (request: any) => {
        request.headers['Accept-Version'] = 'v1'

        console.log(request)

        return request
      },
      filter: true,
      // withCredentials: true,
    })
  }, [])

  return <div id='v1'/>
}
