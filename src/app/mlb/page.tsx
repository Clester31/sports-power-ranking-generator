"use client"

import { useEffect, useState } from 'react'
import mlb_team_info from '../teaminfo/mlb_team_info'
import FullTeamList from '../components/FullTeamList';
import Footer from '../components/Footer';

export default function MLBList() {
    const [teams, setTeams] = useState<object[]>([]);

    useEffect(() => {
        setTeams(mlb_team_info);
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <FullTeamList teamList={teams} league={'MLB'} />
            <Footer />
        </div>
    )
}