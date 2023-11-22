import SubjectService from "App/Services/SubjectService";

const subjectService = new SubjectService();

export default class SubjectsController {

    public async fetchSubjects() {
        const response = await subjectService.fetchSubjects();
        return response;
    }

    public async findSubjectById({ params }) {
        const response = await subjectService.findSubjectById(params.id);
        return response;
    }

    public async findSubjectByName({ params }) {
        const response = await subjectService.findSubjectByName(params.name);
        return response;
    }

    public async saveSubject(request) {
        const response = await subjectService.saveSubject(request);
        return response;
    }

    public async deleteSubjectById({ params }) {
        const response = await subjectService.deleteSubjectById(params.id);
        return response;
    }
}