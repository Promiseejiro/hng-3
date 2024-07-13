import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(request, { params }) {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${params.product}?organization_id=04bd5f1f59814d91af03179706c01855&Appid=IYISGX44YNAPMDE&Apikey=f83f5d9239bd40bea801feda7eebdc5420240712221910617336`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ exam: "exam fetch failed" });
  }
}
