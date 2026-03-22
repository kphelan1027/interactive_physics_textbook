import { NextResponse } from 'next/server'
import { runSeeder } from '@/lib/seeder'

export async function POST() {
  const result = await runSeeder()
  return NextResponse.json(result)
}
