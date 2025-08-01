import { prisma } from '@/lib/db'
import React from 'react'

const page = async () => {
  const users = await prisma.user.findMany()
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  )
}

export default page