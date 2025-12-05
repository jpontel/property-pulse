'use client';
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function PropertyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { id } = useParams();

    const name = searchParams.get('name');

    return(
        <div>
            <button
                className="bg-blue-500" 
                onClick={() => {router.push('/')}}>
                Go Home {name}
            </button>
        </div>
    );
}