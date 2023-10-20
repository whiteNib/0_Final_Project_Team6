// 오픈예정 프로젝트 상세 화면: 프로젝트 제작자 및 서비스 관리자만 출입가능
import React from 'react'
import { useLocation } from 'react-router';
import useFetch from '../../hooks/useFetch';
import MenuTabs from '../../MenuTabs';

export default function ComingProj() {
	const location = useLocation();
	const { _id } = location.state || {};

	const projectData = useFetch("https://json-server-vercel-sepia-omega.vercel.app/projects");

	if (!projectData) {
			return <div>Loading...</div>;
	}

	// "proj_id" 값을 기반으로 해당 "projName"을 찾기
	const selectedProject = projectData.find(item => item.proj_id === _id);

	if (!selectedProject) {
			return <div>Project not found</div>;
	}

	const { projName, projMainImgPath, projIntro } = selectedProject;

    return (
        <div>
            <h1 className='titlealign'>{projName}</h1>
            <div className='center'>
                <div>
                    <div>
                        <img className='mainImage' src={projMainImgPath} alt='메인 사진'></img>
                    </div>
                    <div className='shortDesc'>
                        {projIntro}
                    </div>
                    <div id='projDesc'>
                        <MenuTabs></MenuTabs>
                    </div>
                </div>
                <div className='scroll'>

                    <div className='RewardSelect'>
                        {/* 오픈예정 프로젝트 입니다. */}
                    </div>
                </div>
            </div>
        </div>
    );
}