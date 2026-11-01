import Link from 'next/link'
import { ArrowUpRight, ShieldAlert } from 'lucide-react'

export function ProjectBrainTumor() {
    return (
        <article id='brain-tumor-detection' aria-labelledby='brain-title' className='relative bg-white pt-20'>
            <div className='mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)]'>
                {/* Dark charcoal card with atmospheric pink glow */}
                <div className='relative overflow-hidden rounded-[clamp(20px,2.6vw,36px)] bg-[#17151A] p-[clamp(24px,4vw,64px)] text-white shadow-2xl'>
                    {/* Atmospheric pink glow backdrop */}
                    <div
                        aria-hidden='true'
                        className='soft-breathe pointer-events-none absolute -right-[20%] -top-[30%] h-[80%] w-[70%] rounded-full'
                        style={{
                            background:
                                'radial-gradient(circle, rgba(247,187,210,0.3) 0%, rgba(247,187,210,0) 65%)',
                        }}
                    />

                    <div className='relative grid gap-12 lg:grid-cols-12 lg:gap-10'>
                        {/* Left Column: Heading, description, tech stack */}
                        <div className='lg:col-span-6'>
                            <h3
                                id='brain-title'
                                className='max-w-[18ch] text-balance font-heading text-[clamp(28px,3.4vw,52px)] font-bold leading-[0.98] tracking-[-0.035em] text-white'
                            >
                                Brain Tumor Detection
                            </h3>
                            <p className='mt-2 font-serif text-[clamp(18px,1.6vw,24px)] italic text-[#f4c6d8]'>
                                Educational deep-learning MRI classification
                            </p>

                            <p className='mt-8 text-pretty text-[clamp(16px,1.4vw,19px)] leading-[1.5] text-white/90'>
                                An educational deep-learning web application for classifying brain MRI images into four distinct categories.
                            </p>
                            <p className='mt-4 text-[14.5px] leading-relaxed text-white/70'>
                                A convolutional neural network trained on MRI scans resized to 224 × 224 pixels, served through a lightweight Flask web interface: upload an image to receive the predicted classification alongside confidence distribution.
                            </p>

                            {/* Tech Stack */}
                            <div className='mt-8'>
                                <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50'>
                                    Technologies
                                </p>
                                <div className='flex flex-wrap gap-1.5'>
                                    {['Python', 'TensorFlow', 'Keras', 'CNN', 'Flask', 'OpenCV'].map((tech) => (
                                        <span
                                            key={tech}
                                            className='rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white/85'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Important Educational Disclaimer */}
                            <div className='mt-8 flex items-start gap-3 rounded-2xl border border-[#f7bbd2]/30 bg-[#f7bbd2]/[0.08] px-5 py-4 text-[13px] leading-relaxed text-white/85'>
                                <ShieldAlert className='mt-0.5 size-4 shrink-0 text-[#f7bbd2]' />
                                <span>
                                    This is an educational demonstration. It is not a clinically validated diagnostic tool and must not be used for medical decisions.
                                </span>
                            </div>

                            <div className='mt-8'>
                                <Link
                                    href='https://github.com/Lemburu-Bhuvaneswari/Brain-Tumor-Detection'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-[#17151A] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FCE8F0] focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                                >
                                    View repository
                                    <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Model Architecture & Classes */}
                        <div className='lg:col-span-5 lg:col-start-8'>
                            <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50'>
                                Model Architecture (as trained)
                            </p>
                            <div className='relative mt-4 space-y-2.5'>
                                {[
                                    { layer: 'Input', spec: 'MRI image, 224 × 224' },
                                    { layer: 'Convolution', spec: '32 filters, 3 × 3, ReLU' },
                                    { layer: 'Pooling', spec: 'Max pooling (2 × 2)' },
                                    { layer: 'Dense', spec: '64 units, ReLU' },
                                    { layer: 'Output', spec: '4-way Softmax' },
                                ].map((item, idx) => (
                                    <div
                                        key={item.layer}
                                        className='flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xs'
                                        style={{
                                            marginLeft: `${idx * 2}%`,
                                            marginRight: `${idx * 2}%`,
                                        }}
                                    >
                                        <span className='text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f7bbd2]'>
                                            {item.layer}
                                        </span>
                                        <span className='text-right text-[13.5px] text-white/85'>{item.spec}</span>
                                    </div>
                                ))}
                            </div>

                            <p className='mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50'>
                                Four Target Classes
                            </p>
                            <div className='mt-3 grid grid-cols-2 gap-2.5'>
                                {['Glioma', 'Meningioma', 'Pituitary', 'No tumour'].map((c) => (
                                    <div
                                        key={c}
                                        className='rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-heading text-[14.5px] font-semibold tracking-[-0.01em] text-white'
                                    >
                                        {c}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
