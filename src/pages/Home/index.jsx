import React from 'react'
import avatar from '@/assets/images/avatar.jpg'
import { Avatar } from 'antd'
import styles from './index.module.scss'
import { Button, Row, Col } from 'antd'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import Title from './components/Title'
import tansiwei from '@/PDF/tansiwei.pdf'
export default function Home() {
  const Interests = ['量子计算', '服务计算', '人机交互']
  const education = [
    '学士学位, 计算机科学与技术学院 2015.9- 2019.7',
    '博士在读, 学士学位, 计算机科学与技术学院 2019.9- 2024.7',
  ]
  const research1 = [
    {
      title: '量⼦计算测控系统和云平台',
      content: `研究⾼效的量⼦⽐特和外围设备的测控系统，部署于浙⼤ 121 ⽐特
      量⼦计算机，在接近器件物理极限的精度下实现了相较于国际常⽤测控系统 (Labrad) 百倍加速。作为主
      要完成⼈参与建设浙⼤太元量⼦云平台，⽤户包括清华、北⼤、新加坡国⽴、华为、阿⾥以及微软等著
      名⾼效企业`,
    },
    {
      title: '量⼦计算编译',
      content: `研究⾼保真的和⾼性能的量⼦编译器，在量⼦电路优化和⾣矩阵分解两个任务分
      别实现了 4.7 倍的错误率减少和 46.3 倍的加速，相关⽂章发表在计算机体系结构顶级会议 MICRO（CCFA）上，为浙⼤第⼀个在该会议发表论⽂的博⼠⽣，中国⼤陆在该会议年均发表⼗篇以内，在计算机体系
      结构顶级会议 ASPLOS 发表 Tutorial 报告，为国内量⼦体系结构⾸次。`,
    },
    {
      title: '量⼦噪声优化',
      content: `研究⾼保真的和⾼性能的量⼦编译器，在量⼦电路优化和⾣矩阵分解两个任务分
      别实现了 4.7 倍的错误率减少和 46.3 倍的加速，相关⽂章发表在计算机体系结构顶级会议 MICRO（CCFA）上，为浙⼤第⼀个在该会议发表论⽂的博⼠⽣，中国⼤陆在该会议年均发表⼗篇以内，在计算机体系
      结构顶级会议 ASPLOS 发表 Tutorial 报告，为国内量⼦体系结构⾸次。`,
    },
    {
      title: '量⼦加速器',
      content: `研究⾼保真的和⾼性能的量⼦编译器，在量⼦电路优化和⾣矩阵分解两个任务分
      别实现了 4.7 倍的错误率减少和 46.3 倍的加速，相关⽂章发表在计算机体系结构顶级会议 MICRO（CCFA）上，为浙⼤第⼀个在该会议发表论⽂的博⼠⽣，中国⼤陆在该会议年均发表⼗篇以内，在计算机体系
      结构顶级会议 ASPLOS 发表 Tutorial 报告，为国内量⼦体系结构⾸次。`,
    },
    {
      title: '量⼦程序验证和分析',
      content: `通过探索量⼦特性、模式识别实现量⼦程序的正确性验证和分析，成果发
      表在体系结构期间会议 ASPLOS（CCF-A）和计算机可视化顶级会议 VIS 2023（CCF-A），其中 VIS 上的
      论⽂为该领域第⼆篇量⼦相关论⽂，国内⾸篇。`,
    },
  ]
  const research2 = [
    {
      title: ' 服务模式：',
      content: `研究商业计算机系统在不同商业模式的价值，成果发表在 SCC（CCF-C）上。`,
    },
    {
      title: '人机交互:',
      content: `研究数字⼈⽂⼈机交互的结合，成果发表在 TVCG（CCF-A）和 VIS（CCF-A）上。`,
    },
  ]
  const publications = [
    {
      title: `Siwei Tan, Qianming Yu, et al. “HyQSAT: A Hybrid Approach for 3-SAT Problems
      by Integrating Quantum Annealer with CDCL.” HPCA 2023 (量⼦加速器 CCF-A 体系四⼤会议)`,
      type: '',
      link: '',
    },
    {
      title: `Siwei Tan, Congliang Lang, et al. “QuCT: A Framework for Analyzing Quantum Circuit by
      Extracting Contextual and Topological Features.” MICRO 2023 (量⼦电路分析 CCF-A 体系四⼤会议)`,
      type: '',
      link: '',
    },
    {
      title: `Siwei Tan, Hanyu Zhang, et al. “QuFEM: Fast and Accurate Quantum Readout Calibration Using the
      Finite Element Method”. ASPLOS 2024 (⼤规模量⼦读取矫正 CCF-A 体系四⼤会议)`,
      type: '',
      link: '',
    },
    {
      title: `Siwei Tan, Debing Xiang, et al. “MorphQPV: Exploiting Isomorphism in Quantum Programs to Facilitate
      Confident Verification”. ASPLOS 2024 (量⼦程序验证 CCF-A 体系四⼤会议)`,
      type: '',
      link: '',
    },
    {
      title: `Wei Zhang, Siwei Tan (共⼀), et al. “Visual reasoning for uncertainty in spatio-temporal events of
      historical figures.” TVCG (数字⼈⽂ CCF-A ⼈机交互顶刊)`,
      type: '',
      link: '',
    },
    {
      title: `Jianwei Yin (导师), Siwei Tan, et al. “JTang Dubhe: a service pattern modeling and analysis system.” SCC,
      2020 (服务模式仿真 CCF-C 服务计算顶会)`,
      type: '',
      link: '',
    },
  ]
  const unpublications = [
    {
      title: `Siwei Tan, Liqiang Lu, Jianwei Yin, et al. “Janus: A Full-stack Cloud Infrastructure for
      Quantum Computing”. ATC (量⼦云平台 CCF-A 计算机系统顶级会议)`,
      type: '',
      link: '',
    },
    {
      title: `Siwei Tan, Liqiang Lu, Jianwei Yin, et al. “QuCode: Visualization Interface for Learning Quantum
      Computing”. TCAD (交互式量⼦电路设计 CCF-A 体系结构顶级期刊)`,
      type: '',
      link: '',
    },
    {
      title: `Siwei Tan, Liqiang Lu, Jianwei Yin, et al. “QuCode: Visualization Interface for Learning Quantum
      Computing”. TCAD (交互式量⼦电路设计 CCF-A 体系结构顶级期刊)`,
      type: '',
      link: '',
    },
    {
      title: `Siwei Tan, Liqiang Lu, Jianwei Yin, et al. Fast-USYN: “Enabling Fast Synthesis From Unitary to Highquality Quantum Circuit”. TCAD (量⼦程序综合 CCF-A 计算机系统顶级会议)`,
      type: '',
      link: '',
    },
  ]
  const award = [
    '博⼠国家奖学⾦ (Top 2% 浙江⼤学)',
    '三好研究⽣ (Top 5% 浙江⼤学)',
  ]
  const downLoad = () => {
    const downloadLink = document.createElement('a')
    downloadLink.href = tansiwei
    downloadLink.download = 'tansiwei.pdf'
    downloadLink.click()
  }
  return (
    <div className={styles.root}>
      <div className="container">
        <Row justify="center">
          <Col span={20}>
            <div className="intorduce">
              <Row>
                <Col span={8}>
                  <div className="avatar_content">
                    <Avatar size={270} src={avatar} />
                    <div className="name">谭思危</div>
                    <div className="school">Ph.D</div>
                    <div className="school">Zhejiang University</div>
                  </div>
                </Col>
                <Col span={16}>
                  <div className="intorduce_content">
                    Siwei Tan is a 5th year PhD student at Zhejiang University.
                    His interests include the quantum algorithm and computer
                    architecture.
                    <div className="text"></div>
                    <div className="downLowd">
                      <VerticalAlignBottomOutlined
                        style={{ cursor: 'pointer' }}
                        onClick={downLoad}
                      />
                      Check out my CV for more detailed information.
                    </div>
                  </div>
                  <div className="interests_education">
                    <div className="interests">
                      <div className="title">Interests</div>
                      <div className="Interests_content content">
                        {Interests.map((item, index) => (
                          <div className="interests_item item" key={index}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="education">
                      <div className="title">education</div>
                      <div className="education_content content">
                        {education.map((item, index) => (
                          <div className="education_item item" key={index}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="research">
              <Title title={'研究内容'} size={24} />
              <div className="research_content">
                <div className="research_little_title">
                  量子计算：一作在计算机体系结构四大会议发表论文四篇，目前量子体系结构领域国内领先。
                </div>
                {research1.map((item, index) => (
                  <div className="research_item" key={index}>
                    <span className="weight_title">{item.title}:</span>
                    <span className="content">{item.content}</span>
                  </div>
                ))}
                <div className="research_little_title">服务计算和人机交互 </div>
                {research2.map((item, index) => (
                  <div className="research_item" key={index}>
                    <span className="weight_title">{item.title}</span>
                    <span className="content">{item.content}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="publication">
              <Title title={'Publication'} />
              <Title title={'一作或共一'} mt={10} />
              <div className="publication_content">
                {publications.map((item, index) => (
                  <div className="publication_item" key={index}>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
              <Title title={'在审的文章'} mt={10} />

              <div className="publication_content">
                {unpublications.map((item, index) => (
                  <div className="publication_item" key={index}>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="award">
              <Title title={'获奖情况'} mt={30} />
              <div className="award_content">
                {award.map((item, index) => (
                  <div className="award_item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="project">
              <Title title={'开源项⽬'} mt={30} />
              <div className="project_content">
                <div className="project_item">
                  发表论⽂的代码均在
                  <a
                    href="https://github.com/JanusQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/JanusQ
                  </a>
                  中可⻅。
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
