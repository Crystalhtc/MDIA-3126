import { createClient } from '@/utils/supabase/server';
import CreateMemory from './CreateMemory';
import MemoryList from './memoryList';

export default async function Page() {
    const supabase = await createClient();
    const { 
        data: { user }, 
    } = await supabase.auth.getUser(); // getUser is better than getSession

    const {data, error} = await supabase.auth.getUser();

    return(
        <div className="p-4 bg-black text-white">
            Hi, welcome to my memory page
            <CreateMemory user={user}/>
            <MemoryList user={user}/>
        </div>
    ) 
    
}