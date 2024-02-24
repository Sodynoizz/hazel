// noinspection NonAsciiCharacters

import { IDMap } from '../../../util/data/IDMap'

/**
 * @category Built-in
 */
export abstract class ID {
  public static readonly systemClubs = new IDMap({
    ก30901: 'คณิตศาสตร์',
    'ก30901-1': 'คณิตศาสตร์ (A-Math)',
    'ก30901-2': 'คณิตศาสตร์ (E-Sport)',
    'ก30901-3': 'คณิตศาสตร์ (หมากล้อม)',
    ก30902: 'วิทยาศาสตร์',
    'ก30903-1': 'สังคมศึกษา (ภาคีสังคมศึกษา)',
    'ก30903-2': 'สังคมศึกษา (หลากทัศนะประวัติศาสตร์)',
    'ก30903-3_1': 'สังคมศึกษา (หนังสังคม) ฝ่าย documentary maker',
    'ก30903-3_2': 'สังคมศึกษา (หนังสังคม) ฝ่าย film critics',
    'ก30903-4': 'สังคมศึกษา (TU Activists)',
    'ก30903-5': 'สังคมศึกษา (พระพุทธศาสนา)',
    ก30904: 'ภาษาไทย',
    'ก30905-1': 'ภาษาอังกฤษ (MUN)',
    'ก30905-2_1': 'ภาษาอังกฤษ (English Drama) ฝ่าย Actor',
    'ก30905-2_2': 'ภาษาอังกฤษ (English Drama) ฝ่าย Stage Crew',
    'ก30905-2_6': 'ภาษาอังกฤษ (English Drama) ฝ่าย PR Staff',
    'ก30905-2_7': 'ภาษาอังกฤษ (English Drama) ฝ่าย Editor and Music Composer',
    'ก30905-2_9': 'ภาษาอังกฤษ (English Drama) ฝ่าย Costume and Makeup',
    'ก30905-3': 'ภาษาอังกฤษ (Debate)',
    'ก30905-4': 'ภาษาอังกฤษ (Crossword)',
    // 'ก30905-5': 'ภาษาอังกฤษ (English Skills M.6)',
    // 'ก30905-6': 'ภาษาอังกฤษ (English Skills M.5)',
    // 'ก30905-7': 'ภาษาอังกฤษ (English Skills M.4)',
    'ก30905-8': 'English Skills (Vocabulary) M.4',
    'ก30905-9': 'ภาษาอังกฤษ (นักเรียนแลกเปลี่ยน)',
    'ก30905-10': 'ภาษาอังกฤษ (Public Speaking)',
    'ก30905-11': 'ภาษาอังกฤษ (Quiz)',
    // 'ก30905-12': 'ภาษาอังกฤษ Spelling (Bee)',
    'ก30905-13': 'ภาษาอังกฤษ (Oracle)',
    'ก30905-14': 'ภาษาอังกฤษ (Language and Intercultural Communication)',
    // 'ก30905-15': 'ภาษาอังกฤษ (Inventive English Media M.5)',
    'ก30905-16': 'ภาษาอังกฤษ (English Movie Club M.4-6)',
    'ก30905-17': 'ภาษาอังกฤษ (English MC)', // New 2023
    'ก30905-18': 'ภาษาอังกฤษ (English Story Telling M.4-5)', // New 2023
    ก30909: 'ห้องสมุด',
    'ก30909-1': 'ห้องสมุด (บอร์ดเกม)',
    ก30910: 'ศาสนาและวัฒนธรรมไทย',
    ก30911: 'นาฏศิลป์',
    ก30912: 'วาทศิลป์',
    ก30913: 'วรรณศิลป์ต.อ.',
    ก30914: 'ดนตรีไทย',
    ก30915_1: 'ดนตรีสากล ฝ่าย Band',
    ก30915_2: 'ดนตรีสากล ฝ่าย Chamber',
    ก30915_4: 'ดนตรีสากล ฝ่าย Technician',
    ก30916: 'ศิลปศึกษา',
    ก30918: 'ดุริยางค์',
    'ก30920-1': 'นันทนาการกีฬา (ฟุตบอล)',
    'ก30920-2': 'นันทนาการกีฬา (วอลเลย์บอล)',
    'ก30920-3': 'นันทนาการกีฬา (บาสเกตบอล)',
    'ก30920-4': 'นันทนาการกีฬา (เทนนิส)',
    'ก30920-5': 'นันทนาการกีฬา (แบดมินตัน)',
    'ก30920-6': 'นันทนาการกีฬา (ลีลาศ)',
    'ก30920-7': 'นันทนาการกีฬา (เบ็ดเตล็ด)',
    'ก30920-8': 'นันทนาการกีฬา (ผู้นําเชียร์โรงเรียน)',
    // 'ก30952-1': 'ภาษาฝรั่งเศส (French Chorus)',
    'ก30952-2': 'ภาษาฝรั่งเศส',
    'ก30952-3': 'ภาษาญี่ปุ่น',
    'ก30952-4': 'ภาษาจีน',
    'ก30952-5': 'ภาษาสเปน',
    'ก30952-6': 'ภาษาเกาหลี',
    'ก30952-7': 'ภาษาเยอรมัน',
    ก30921_1: 'หมากกระดาน ฝ่าย หมากรุกสากล',
    ก30921_2: 'หมากกระดาน ฝ่าย หมากรุกไทย',
    ก30922: 'ผู้บําเพ็ญประโยชน์',
    ก30923: 'ผู้นําเยาวชนสาธารณสุขฯ',
    ก30924: 'อนุรักษ์ธรรมชาติฯ',
    ก30925: 'เพาะพันธุ์ไม้',
    ก30927: 'คอมพิวเตอร์',
    ก30928: 'ถ่ายภาพ',
    ก30929: 'สิ่งละอันพันละน้อย',
    ก30932: 'ขับร้องประสานเสียง',
    // ก30934: 'กฎหมายน่ารู้',
    ก30937: 'สร้างสรรค์หนังสือ',
    ก30941_1: 'การ์ตูน ฝ่ายศิลป์',
    ก30941_2: 'การ์ตูน ฝ่ายร้องเพลง',
    ก30941_3: 'การ์ตูน ฝ่ายฟิคชัน',
    ก30941_4: 'การ์ตูน ฝ่ายคอสเพลย์',
    ก30942_1: 'นิเทศศิลป ฝ่ายนิตยสาร',
    ก30942_2: 'นิเทศศิลป ฝ่ายแฟชั่น',
    ก30942_3: 'นิเทศศิลป ฝ่ายละครเวที',
    ก30942_4: 'นิเทศศิลป ฝ่ายออกแบบ',
    ก30943: 'พัฒนาศักยภาพทางวิทยาศาสตร์',
    ก30945: 'ของเล่นเพื่อการเรียนรู้',
    'ก30946-1': 'ภาพยนตร์สั้นและสื่อโทรทัศน์ (ผลิตสื่อ)',
    ก30946_1: 'ภาพยนตร์สั้นและสื่อโทรทัศน์ ฝ่ายกล้อง',
    ก30946_2: 'ภาพยนตร์สั้นและสื่อโทรทัศน์ ฝ่ายเขียนบท',
    ก30946_3: 'ภาพยนตร์สั้นและสื่อโทรทัศน์ ฝ่ายตัดต่อ',
    ก30946_4: 'ภาพยนตร์สั้นและสื่อโทรทัศน์ ฝ่ายกำกับ',
    ก30947: 'เศรษฐศาสตร์',
    'ก30947-1': 'เศรษฐศาสตร์ (บริหารธุรกิจ)',
    // ก30948: 'วิทยาศาสตร์โลกทั้งระบบ',
    ก30950: 'สันทนากร',
    ก30951: 'โลกศาสตร์',
    ก30953: 'เพื่อนที่ปรึกษา'
  })

  public static readonly clubsNoSection = new IDMap({
    ก30901: 'คณิตศาสตร์',
    'ก30901-1': 'คณิตศาสตร์ (A-Math)',
    'ก30901-2': 'คณิตศาสตร์ (E-Sport)',
    'ก30901-3': 'คณิตศาสตร์ (หมากล้อม)',
    ก30902: 'วิทยาศาสตร์',
    'ก30903-1': 'สังคมศึกษา (ภาคีสังคมศึกษา)',
    'ก30903-2': 'สังคมศึกษา (หลากทัศนะประวัติศาสตร์)',
    'ก30903-3': 'สังคมศึกษา (หนังสังคม)',
    'ก30903-4': 'สังคมศึกษา (TU Activists)',
    'ก30903-5': 'สังคมศึกษา (พระพุทธศาสนา)',
    ก30904: 'ภาษาไทย',
    'ก30905-1': 'ภาษาอังกฤษ (MUN)',
    'ก30905-2': 'ภาษาอังกฤษ (English Drama)',
    'ก30905-3': 'ภาษาอังกฤษ (Debate)',
    'ก30905-4': 'ภาษาอังกฤษ (Crossword)',
    // 'ก30905-5': 'ภาษาอังกฤษ (English Skills M.6)',
    // 'ก30905-6': 'ภาษาอังกฤษ (English Skills M.5)',
    // 'ก30905-7': 'ภาษาอังกฤษ (English Skills M.4)',
    'ก30905-8': 'English Skills (Vocabulary) M.4',
    'ก30905-9': 'ภาษาอังกฤษ (นักเรียนแลกเปลี่ยน)',
    'ก30905-10': 'ภาษาอังกฤษ (Public Speaking)',
    'ก30905-11': 'ภาษาอังกฤษ (Quiz)',
    // 'ก30905-12': 'ภาษาอังกฤษ Spelling (Bee)',
    'ก30905-13': 'ภาษาอังกฤษ (Oracle)',
    'ก30905-14': 'ภาษาอังกฤษ (Language and Intercultural Communication)',
    // 'ก30905-15': 'ภาษาอังกฤษ (Inventive English Media M.5)',
    'ก30905-16': 'ภาษาอังกฤษ (English Movie Club M.4-6)',
    'ก30905-17': 'ภาษาอังกฤษ (English MC)', // New 2023
    'ก30905-18': 'ภาษาอังกฤษ (English Story Telling M.4-5)', // New 2023
    ก30909: 'ห้องสมุด',
    'ก30909-1': 'ห้องสมุด (บอร์ดเกม)',
    ก30910: 'ศาสนาและวัฒนธรรมไทย',
    ก30911: 'นาฏศิลป์',
    ก30912: 'วาทศิลป์',
    ก30913: 'วรรณศิลป์ต.อ.',
    ก30914: 'ดนตรีไทย',
    ก30915: 'ดนตรีสากล',
    ก30916: 'ศิลปศึกษา',
    ก30918: 'ดุริยางค์',
    'ก30920-1': 'นันทนาการกีฬา (ฟุตบอล)',
    'ก30920-2': 'นันทนาการกีฬา (วอลเลย์บอล)',
    'ก30920-3': 'นันทนาการกีฬา (บาสเกตบอล)',
    'ก30920-4': 'นันทนาการกีฬา (เทนนิส)',
    'ก30920-5': 'นันทนาการกีฬา (แบดมินตัน)',
    'ก30920-6': 'นันทนาการกีฬา (ลีลาศ)',
    'ก30920-7': 'นันทนาการกีฬา (เบ็ดเตล็ด)',
    'ก30920-8': 'นันทนาการกีฬา (ผู้นําเชียร์โรงเรียน)',
    // 'ก30952-1': 'ภาษาฝรั่งเศส (French Chorus)',
    'ก30952-2': 'ภาษาฝรั่งเศส',
    'ก30952-3': 'ภาษาญี่ปุ่น',
    'ก30952-4': 'ภาษาจีน',
    'ก30952-5': 'ภาษาสเปน',
    'ก30952-6': 'ภาษาเกาหลี',
    'ก30952-7': 'ภาษาเยอรมัน',
    ก30921: 'หมากกระดาน',
    ก30922: 'ผู้บําเพ็ญประโยชน์',
    ก30923: 'ผู้นําเยาวชนสาธารณสุขฯ',
    ก30924: 'อนุรักษ์ธรรมชาติฯ',
    ก30925: 'เพาะพันธุ์ไม้',
    ก30927: 'คอมพิวเตอร์',
    ก30928: 'ถ่ายภาพ',
    ก30929: 'สิ่งละอันพันละน้อย',
    ก30932: 'ขับร้องประสานเสียง',
    // ก30934: 'กฎหมายน่ารู้',
    ก30937: 'สร้างสรรค์หนังสือ',
    ก30941: 'การ์ตูน',
    ก30942: 'นิเทศศิลป',
    ก30943: 'พัฒนาศักยภาพทางวิทยาศาสตร์',
    ก30945: 'ของเล่นเพื่อการเรียนรู้',
    'ก30946-1': 'ภาพยนตร์สั้นและสื่อโทรทัศน์ (ผลิตสื่อ)',
    ก30946: 'ภาพยนตร์สั้นและสื่อโทรทัศน์',
    ก30947: 'เศรษฐศาสตร์',
    'ก30947-1': 'เศรษฐศาสตร์ (บริหารธุรกิจ)',
    // ก30948: 'วิทยาศาสตร์โลกทั้งระบบ',
    ก30950: 'สันทนากร',
    ก30951: 'โลกศาสตร์',
    ก30953: 'เพื่อนที่ปรึกษา'
  })

  public static readonly clubsSectionTranslationLayer = new IDMap({
    'ก30903-3_1': 'ก30903-3',
    'ก30903-3_2': 'ก30903-3',
    'ก30905-2_1': 'ก30905-2',
    'ก30905-2_2': 'ก30905-2',
    'ก30905-2_6': 'ก30905-2',
    'ก30905-2_7': 'ก30905-2',
    'ก30905-2_9': 'ก30905-2',
    ก30915_1: 'ก30915',
    ก30915_2: 'ก30915',
    ก30915_4: 'ก30915',
    ก30921_1: 'ก30921',
    ก30921_2: 'ก30921',
    ก30941_1: 'ก30941',
    ก30941_2: 'ก30941',
    ก30941_3: 'ก30941',
    ก30941_4: 'ก30941',
    ก30942_1: 'ก30942',
    ก30942_2: 'ก30942',
    ก30942_3: 'ก30942',
    ก30942_4: 'ก30942',
    ก30946_1: 'ก30946',
    ก30946_2: 'ก30946',
    ก30946_3: 'ก30946',
    ก30946_4: 'ก30946'
  })

  public static readonly mainClubsTranslationLayer = new IDMap({
    'ก30901-1': 'ก30901',
    'ก30901-2': 'ก30901',
    'ก30901-3': 'ก30901',
    'ก30903-1': 'ก30903',
    'ก30903-2': 'ก30903',
    'ก30903-3_1': 'ก30903',
    'ก30903-3_2': 'ก30903',
    'ก30903-4': 'ก30903',
    'ก30903-5': 'ก30903',
    'ก30905-1': 'ก30905',
    'ก30905-2_1': 'ก30905',
    'ก30905-2_2': 'ก30905',
    'ก30905-2_6': 'ก30905',
    'ก30905-2_7': 'ก30905',
    'ก30905-2_9': 'ก30905',
    'ก30905-3': 'ก30905',
    'ก30905-4': 'ก30905',
    'ก30905-8': 'ก30905',
    'ก30905-9': 'ก30905',
    'ก30905-10': 'ก30905',
    'ก30905-11': 'ก30905',
    'ก30905-13': 'ก30905',
    'ก30905-14': 'ก30905',
    'ก30905-15': 'ก30905',
    'ก30905-16': 'ก30905',
    'ก30905-17': 'ก30905',
    'ก30905-18': 'ก30905',
    'ก30909-1': 'ก30909',
    ก30915_1: 'ก30915',
    ก30915_2: 'ก30915',
    ก30915_4: 'ก30915',
    'ก30920-1': 'ก30920',
    'ก30920-2': 'ก30920',
    'ก30920-3': 'ก30920',
    'ก30920-4': 'ก30920',
    'ก30920-5': 'ก30920',
    'ก30920-6': 'ก30920',
    'ก30920-7': 'ก30920',
    'ก30920-8': 'ก30920',
    'ก30952-1': 'ก30952-2',
    ก30921_1: 'ก30921',
    ก30921_2: 'ก30921',
    ก30941_1: 'ก30941',
    ก30941_2: 'ก30941',
    ก30941_3: 'ก30941',
    ก30941_4: 'ก30941',
    ก30942_1: 'ก30942',
    ก30942_2: 'ก30942',
    ก30942_3: 'ก30942',
    ก30942_4: 'ก30942',
    'ก30946-1': 'ก30946',
    ก30946_1: 'ก30946',
    ก30946_2: 'ก30946',
    ก30946_3: 'ก30946',
    ก30946_4: 'ก30946',
    'ก30947-1': 'ก30947'
  })

  public static readonly mainClubs = new IDMap({
    ก30901: 'คณิตศาสตร์',
    ก30902: 'วิทยาศาสตร์',
    ก30903: 'สังคมศึกษา',
    ก30904: 'ภาษาไทย',
    ก30905: 'ภาษาอังกฤษ',
    ก30909: 'ห้องสมุด',
    ก30910: 'ศาสนาและวัฒนธรรมไทย',
    ก30911: 'นาฏศิลป์',
    ก30912: 'วาทศิลป์',
    ก30913: 'วรรณศิลป์ต.อ.',
    ก30914: 'ดนตรีไทย',
    ก30915: 'ดนตรีสากล',
    ก30916: 'ศิลปศึกษา',
    ก30918: 'ดุริยางค์',
    ก30920: 'นันทนาการกีฬา',
    'ก30952-2': 'ภาษาฝรั่งเศส',
    'ก30952-3': 'ภาษาญี่ปุ่น',
    'ก30952-4': 'ภาษาจีน',
    'ก30952-5': 'ภาษาสเปน',
    'ก30952-6': 'ภาษาเกาหลี',
    'ก30952-7': 'ภาษาเยอรมัน',
    ก30921: 'หมากกระดาน',
    ก30922: 'ผู้บําเพ็ญประโยชน์',
    ก30923: 'ผู้นําเยาวชนสาธารณสุขฯ',
    ก30924: 'อนุรักษ์ธรรมชาติฯ',
    ก30925: 'เพาะพันธุ์ไม้',
    ก30927: 'คอมพิวเตอร์',
    ก30928: 'ถ่ายภาพ',
    ก30929: 'สิ่งละอันพันละน้อย',
    ก30932: 'ขับร้องประสานเสียง',
    // ก30934: 'กฎหมายน่ารู้',
    ก30937: 'สร้างสรรค์หนังสือ',
    ก30941: 'การ์ตูน',
    ก30942: 'นิเทศศิลป',
    ก30943: 'พัฒนาศักยภาพทางวิทยาศาสตร์',
    ก30945: 'ของเล่นเพื่อการเรียนรู้',
    ก30946: 'ภาพยนตร์สั้นและสื่อโทรทัศน์',
    ก30947: 'เศรษฐศาสตร์',
    // ก30948: 'วิทยาศาสตร์โลกทั้งระบบ',
    ก30950: 'สันทนากร',
    ก30951: 'โลกศาสตร์',
    ก30953: 'เพื่อนที่ปรึกษา'
  })

  public static readonly overriddenTranslationLayer = new IDMap({
    ก30906: 'ก30952-2',
    'ก30906-1': 'ก30952-1',
    ก30908: 'ก30952-3',
    ก30954: 'ก30952-4',
    ก30949: 'ก30952-5',
    ก30955: 'ก30952-6',
    ก30907: 'ก30952-7'
  })
}
