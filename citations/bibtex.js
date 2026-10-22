(() => {
  'use strict';

  const entries = {
  "adam": "@inproceedings{NEURIPS2022_7b122d0a,\n author = {Zhao, Yunqing and Chandrasegaran, Keshigeyan and Abdollahzadeh, Milad and Cheung, Ngai-Man (Man)},\n booktitle = {Advances in Neural Information Processing Systems},\n doi = {10.52202/068431-1412},\n editor = {S. Koyejo and S. Mohamed and A. Agarwal and D. Belgrave and K. Cho and A. Oh},\n pages = {19427--19440},\n publisher = {Curran Associates, Inc.},\n title = {Few-shot Image Generation via Adaptation-Aware Kernel Modulation},\n url = {https://proceedings.neurips.cc/paper_files/paper/2022/file/7b122d0a0dcb1a86ffa25ccba154652b-Paper-Conference.pdf},\n volume = {35},\n year = {2022}\n}\n",
  "attackvlm": "@inproceedings{NEURIPS2023_a97b58c4,\n author = {Zhao, Yunqing and Pang, Tianyu and Du, Chao and Yang, Xiao and LI, Chongxuan and Cheung, Ngai-Man (Man) and Lin, Min},\n booktitle = {Advances in Neural Information Processing Systems},\n doi = {10.52202/075280-2355},\n editor = {A. Oh and T. Naumann and A. Globerson and K. Saenko and M. Hardt and S. Levine},\n pages = {54111--54138},\n publisher = {Curran Associates, Inc.},\n title = {On Evaluating Adversarial Robustness of Large Vision-Language Models},\n url = {https://proceedings.neurips.cc/paper_files/paper/2023/file/a97b58c4f7551053b0512f92244b0810-Paper-Conference.pdf},\n volume = {36},\n year = {2023}\n}\n",
  "codedance": "@InProceedings{Song_2026_CVPR,\n    author    = {Song, Qi and Li, Honglin and Yu, Yingchen and Zhou, Haoyi and Yang, Lin and Bai, Song and She, Qi and Huang, Zilong and Zhao, Yunqing},\n    title     = {CodeDance: A Dynamic Tool-integrated MLLM for Executable Visual Reasoning},\n    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n    month     = {June},\n    year      = {2026},\n    pages     = {19186-19195}\n}",
  "fsban": " @article{Zhao_2023, title={FS-BAN: Born-Again Networks for Domain Generalization Few-Shot Classification}, volume={32}, ISSN={1941-0042}, url={http://dx.doi.org/10.1109/TIP.2023.3266172}, DOI={10.1109/tip.2023.3266172}, journal={IEEE Transactions on Image Processing}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Zhao, Yunqing and Cheung, Ngai-Man}, year={2023}, pages={2252–2266} }\n",
  "fsig": "@InProceedings{Zhao_2022_CVPR,\n    author    = {Zhao, Yunqing and Ding, Henghui and Huang, Houjing and Cheung, Ngai-Man},\n    title     = {A Closer Look at Few-Shot Image Generation},\n    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n    month     = {June},\n    year      = {2022},\n    pages     = {9140-9150}\n}",
  "genlip": "@InProceedings{10.1007/978-3-032-37189-8_33,\nauthor=\"Fang, Yan\nand Lan, Mengcheng\nand Huang, Zilong\nand Lei, Weixian\nand Zhao, Yunqing\nand Zhong, Yujie\nand Yu, Yingchen\nand She, Qi\nand Zhao, Yao\nand Wei, Yunchao\",\neditor=\"Favaro, Paolo\nand Kukelova, Zuzana\nand Maki, Atsuto\nand Rohrbach, Anna\nand Schindler, Konrad\nand Tombari, Federico\",\ntitle=\"Let ViT Speak: Generative Language-Image Pre-training\",\nbooktitle=\"Computer Vision -- ECCV 2026\",\nyear=\"2026\",\npublisher=\"Springer Nature Switzerland\",\naddress=\"Cham\",\npages=\"588--608\",\nabstract=\"In this paper, we present Generative Language-Image Pre-training (GenLIP), a simplified generative pretraining approach for Vision Transformers (ViTs) tailored to multimodal large language models (MLLMs). To better align ViTs with the autoregressive nature of LLMs, GenLIP trains a ViT to predict language tokens directly from visual tokens using a standard language modeling objective--without contrastive batch construction or an additional text decoder. GenLIP offers three key advantages: (1) Simplicity: a single transformer jointly models visual and linguistic tokens; (2) Scalability: it scales efficiently with both data and model size; (3) Performance: it achieves competitive or superior results across diverse multimodal benchmarks. With only 1/5 of the seen samples, GenLIP matches or surpasses strong baselines such as SigLIP2. With continued pretraining on multi-resolution images at native aspect ratios, GenLIP further excels at detail-sensitive tasks such as OCR, chart understanding, and visual question answering, making it a strong foundation for vision encoders in MLLMs.\",\nisbn=\"978-3-032-37189-8\"\n}\n\n",
  "lskd": "@InProceedings{pmlr-v162-chandrasegaran22a,\n  title = \t {Revisiting Label Smoothing and Knowledge Distillation Compatibility: What was Missing?},\n  author =       {Chandrasegaran, Keshigeyan and Tran, Ngoc-Trung and Zhao, Yunqing and Cheung, Ngai-Man},\n  booktitle = \t {Proceedings of the 39th International Conference on Machine Learning},\n  pages = \t {2890--2916},\n  year = \t {2022},\n  editor = \t {Chaudhuri, Kamalika and Jegelka, Stefanie and Song, Le and Szepesvari, Csaba and Niu, Gang and Sabato, Sivan},\n  volume = \t {162},\n  series = \t {Proceedings of Machine Learning Research},\n  month = \t {17--23 Jul},\n  publisher =    {PMLR},\n  pdf = \t {https://proceedings.mlr.press/v162/chandrasegaran22a/chandrasegaran22a.pdf},\n  url = \t {https://proceedings.mlr.press/v162/chandrasegaran22a.html},\n  abstract = \t {This work investigates the compatibility between label smoothing (LS) and knowledge distillation (KD). Contemporary findings addressing this thesis statement take dichotomous standpoints: Muller et al. (2019) and Shen et al. (2021b). Critically, there is no effort to understand and resolve these contradictory findings, leaving the primal question \\text{-} to smooth or not to smooth a teacher network? \\text{-} unanswered. The main contributions of our work are the discovery, analysis and validation of systematic diffusion as the missing concept which is instrumental in understanding and resolving these contradictory findings. This systematic diffusion essentially curtails the benefits of distilling from an LS-trained teacher, thereby rendering KD at increased temperatures ineffective. Our discovery is comprehensively supported by large-scale experiments, analyses and case studies including image classification, neural machine translation and compact student distillation tasks spanning across multiple datasets and teacher-student architectures. Based on our analysis, we suggest practitioners to use an LS-trained teacher with a low-temperature transfer to achieve high performance students. Code and models are available at https://keshik6.github.io/revisiting-ls-kd-compatibility/}\n}\n",
  "pistis": "@misc{chen2026pististechnicalreport,\n      title={Pistis Technical Report}, \n      author={Heyun Chen and Xiaohan Lan and Jiaxi Li and Zhilin Lu and Qi She and Weiwen Xu and Fei Yu and Yujie Zhong and Jinghuan Chen and Zijian Feng and Siyu Jiao and Yiheng Lin and Xinhao Wang and Sihan Yang and Jieyu You and Changbin Zhang and Hengyu Zhang and Xudong Zhang and Yunqing Zhao and Shuai Zheng},\n      year={2026},\n      eprint={2609.28554},\n      archivePrefix={arXiv},\n      primaryClass={cs.AI},\n      url={https://arxiv.org/abs/2609.28554}, \n}",
  "rick": "@InProceedings{Zhao_2023_CVPR,\n    author    = {Zhao, Yunqing and Du, Chao and Abdollahzadeh, Milad and Pang, Tianyu and Lin, Min and Yan, Shuicheng and Cheung, Ngai-Man},\n    title     = {Exploring Incompatible Knowledge Transfer in Few-Shot Image Generation},\n    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n    month     = {June},\n    year      = {2023},\n    pages     = {7380-7391}\n}",
  "text4seg": " @article{Lan_2026, title={Text4Seg++: Advancing Image Segmentation via Generative Language Modeling}, volume={48}, ISSN={1939-3539}, url={http://dx.doi.org/10.1109/TPAMI.2026.3683307}, DOI={10.1109/tpami.2026.3683307}, number={8}, journal={IEEE Transactions on Pattern Analysis and Machine Intelligence}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Lan, Mengcheng and Chen, Chaofeng and Xu, Jiaxing and Li, Zongrui and Ke, Yiping and Jiang, Xudong and Yu, Yingchen and Zhao, Yunqing and Bai, Song}, year={2026}, month=Aug, pages={9486–9501} }\n",
  "thinkgen": "@InProceedings{Jiao_2026_CVPR,\n    author    = {Jiao, Siyu and Lin, Yiheng and Zhong, Yujie and She, Qi and Zhou, Wei and Lan, Xiaohan and Huang, Zilong and Yu, Fei and Yu, Yingchen and Zhao, Yunqing and Zhao, Yao and Wei, Yunchao},\n    title     = {ThinkGen: Generalized Thinking for Visual Generation},\n    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n    month     = {June},\n    year      = {2026},\n    pages     = {14713-14723}\n}",
  "timeexpert": "@InProceedings{Yang_2025_ICCV,\n    author    = {Yang, Zuhao and Yu, Yingchen and Zhao, Yunqing and Lu, Shijian and Bai, Song},\n    title     = {TimeExpert: An Expert-Guided Video LLM for Video Temporal Grounding},\n    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},\n    month     = {October},\n    year      = {2025},\n    pages     = {24286-24296}\n}",
  "watermark": "@misc{zhao2023recipewatermarkingdiffusionmodels,\n      title={A Recipe for Watermarking Diffusion Models}, \n      author={Yunqing Zhao and Tianyu Pang and Chao Du and Xiao Yang and Ngai-Man Cheung and Min Lin},\n      year={2023},\n      eprint={2303.10137},\n      archivePrefix={arXiv},\n      primaryClass={cs.CV},\n      url={https://arxiv.org/abs/2303.10137}, \n}"
};
  if (typeof HTMLDialogElement === 'undefined') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'bibtex-dialog';
  dialog.setAttribute('aria-labelledby', 'bibtex-dialog-heading');
  dialog.setAttribute('aria-describedby', 'bibtex-dialog-title');
  dialog.innerHTML = `
    <h2 id="bibtex-dialog-heading">BibTeX</h2>
    <p class="bibtex-dialog-title" id="bibtex-dialog-title"></p>
    <textarea class="bibtex-dialog-text" aria-label="BibTeX citation" readonly wrap="off" spellcheck="false"></textarea>
    <div class="bibtex-dialog-actions">
      <button type="button" class="bibtex-dialog-copy" autofocus>Copy</button>
      <a class="bibtex-dialog-download" download>Download .bib</a>
      <button type="button" class="bibtex-dialog-close">Close</button>
    </div>
    <p class="bibtex-dialog-status" role="status" aria-live="polite"></p>`;
  document.body.append(dialog);

  const title = dialog.querySelector('.bibtex-dialog-title');
  const text = dialog.querySelector('textarea');
  const copy = dialog.querySelector('.bibtex-dialog-copy');
  const download = dialog.querySelector('.bibtex-dialog-download');
  const status = dialog.querySelector('.bibtex-dialog-status');
  let invoker;

  document.querySelectorAll('a[data-bibtex]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      const citation = entries[link.dataset.bibtex];
      if (!citation || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      invoker = link;
      title.textContent = link.closest('.publication').querySelector('h4').textContent;
      text.value = citation;
      download.href = link.href;
      download.download = link.dataset.bibtex + '.bib';
      status.textContent = '';
      dialog.showModal();
    });
  });

  copy.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text.value);
      status.textContent = 'Copied.';
    } catch {
      text.focus();
      text.select();
      const copied = document.execCommand('copy');
      status.textContent = copied ? 'Copied.' : 'Citation selected. Press Ctrl+C or Command+C to copy.';
      if (copied) copy.focus();
    }
  });

  dialog.querySelector('.bibtex-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (invoker && invoker.isConnected) invoker.focus({ preventScroll: true });
  });
})();
