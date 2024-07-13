import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import axios from "axios";

export async function GET(req, { query }) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products?organization_id=04bd5f1f59814d91af03179706c01855&Appid=IYISGX44YNAPMDE&Apikey=f83f5d9239bd40bea801feda7eebdc5420240712221910617336&page=${page}&size=10`
    );
    return NextResponse.json({
      product: response.data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json([{ name: "error occurred" }]);
  }
}
